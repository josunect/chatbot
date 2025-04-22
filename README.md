# chatbot

This is a sample react application that send requests to a python app using a simple model for a chat bot, to be deployed in Istio Service mesh. 

Requirements: 
- docker
- python
- minikube (With istio installed)

For minikube, run this before build the container to have the image available:
`$(minikube docker-env)`

Download the model: 
`wget https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf -O openchat.gguf`

Build the backend:
`docker build -t chatbot .`
`kubectl create ns chatbot`
`kubectl apply -f chatbot.yaml -n chatbot`

Build the frontend. From /frontend: 

`docker build -t chatbot-api .`

`kubectl label namespace chatbot istio-injection=enabled`
`kubectl apply -f deployment.yaml -n chatbot`


`kubectl apply -f gw.yaml -n chatbot`


Run (Note that the react app is pointing to localhost:6080): 
`kubectl port-forward svc/istio-ingressgateway 6080:80 -n istio-system`
