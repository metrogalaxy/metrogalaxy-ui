docker-build:
	docker build -t metrogalaxy-webapp -f docker/app/Dockerfile .
	docker tag metrogalaxy-webapp:latest 373560387207.dkr.ecr.ap-southeast-1.amazonaws.com/metrogalaxy-webapp:latest
	docker push 373560387207.dkr.ecr.ap-southeast-1.amazonaws.com/metrogalaxy-webapp:latest