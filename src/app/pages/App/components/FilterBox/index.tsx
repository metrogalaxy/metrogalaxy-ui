import * as React from 'react';
import styled from 'styled-components/macro';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import { useForm, useWatch } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { ColorConstants } from 'src/styles/StyleConstants';
import { OutlineButton as OutlineButtonLib } from 'src/app/components/Button';
import SearchImg from './assets/search.png';
import ArrowImg from './assets/arrow.png';

export type FormData = {
  id: string;
  sort: string;
};

export enum SortType {
  LowestID = 'Lowest ID',
  HighestID = 'Highest ID',
  LowestPrice = 'Lowest Price',
  HighestPrice = 'Highest Price',
}

interface FilterBoxProps {
  filterHandler: (FormData) => any;
  isActivated?: boolean;
}

export function FilterBox(props: FilterBoxProps) {
  const { register, control, reset } = useForm<FormData>();

  const watchAllFields = useWatch({
    control: control,
  });

  const resetForm = () => {
    reset({
      id: '',
      sort: 'LowestID',
    });
  };

  React.useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isActivated]);

  React.useEffect(() => {
    props.filterHandler(watchAllFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllFields]);

  return (
    <Wrapper>
      <Box>
        <Title>
          <div className="title-filters">Filters</div>
          <OutlineButton onClick={resetForm}>Clear Filters</OutlineButton>
        </Title>
        <Form>
          <Form.Group className="filter-box-wrapper">
            <Form.Label className="filter-box-form-label">
              Metronion ID
            </Form.Label>
            <Form.Control
              as="input"
              type="number"
              placeholder="Search"
              size="lg"
              className="filter-box-form-input"
              {...register('id')}
            />
          </Form.Group>
          <Form.Group className="filter-box-wrapper">
            <Form.Label className="filter-box-form-label">Sort By</Form.Label>
            <Form.Select
              className="filter-box-form-select"
              {...register('sort')}
            >
              {Object.keys(SortType).map(key => (
                <option key={key} value={key}>
                  {SortType[key]}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mediaQuery.lessThan(ScreenSize.LG)`
    display: flex;
    justify-content: center;
  `}
`;

const Box = styled.div`
  background: rgba(5, 15, 26, 0.6);
  border: 0.2rem solid rgba(98, 228, 127, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 30px 50px rgba(32, 138, 55, 0.28);
  border-radius: 2rem;
  padding: 3.4rem;

  .filter-box-form-input {
    background: #050f1a;
    background-image: url(${SearchImg});
    background-repeat: no-repeat;
    background-position: right 0.75rem center;

    border: 2px solid #203040;
    box-sizing: border-box;
    border-radius: 1.2rem;
    padding: 2rem;
    padding-right: 5rem;

    color: ${ColorConstants.WHITE};
    font-family: 'Acrom';
    font-size: 1.4rem;
    line-height: 1.7rem;
    box-shadow: none;

    &:focus {
      border: 2px solid #6c7680;
    }
  }

  .filter-box-wrapper {
    position: relative;
    margin-bottom: 3.6rem;
  }

  .filter-box-icon {
    position: absolute;
    top: 50%;
    right: 1.4rem;
    width: 3.2rem;
    transform: translateY(-50%);
  }

  .filter-box-form-label {
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: rgba(247, 255, 248, 0.75);
    text-transform: uppercase;
    margin-bottom: 1.8rem;
  }

  .filter-box-form-select {
    background-color: #050f1a;
    background-image: url(${ArrowImg});
    background-size: 3.2rem 3.2rem;
    position: relative;
    border: 2px solid #6c7680;
    box-sizing: border-box;
    border-radius: 1.2rem;
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${ColorConstants.WHITE};
    padding: 1rem 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.6rem;

  .title-filters {
    font-family: 'Acrom';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${ColorConstants.WHITE};
    text-transform: uppercase;
  }
`;

const OutlineButton = styled(OutlineButtonLib)`
  font-size: 1.4rem;
  line-height: 1.5rem;
  border-radius: 1rem;
`;
