import * as React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { LoadingSpinner } from 'src/app/components/Loading';

export function Pitchdeck() {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box w="full">
      <Center>
        <Document
          file="./pitchdeck.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingSpinner />}
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
      </Center>
    </Box>
  );
}
