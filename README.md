This is a sample react application that send requests to a python app using a simple model for a chat bot, to be deployed in the mesh. 

![image](https://github.com/user-attachments/assets/66c837c8-35da-4591-96ef-2f58b52295fd)

Requirements: 
- docker
- python
- minikube 

![image](https://github.com/user-attachments/assets/cfbc76eb-1cdf-4eb3-9a50-66c8d684ac7d)

For minikube, run this before build the container to have the image available:
$(minikube docker-env)

Download the model: 
`wget https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf -O openchat.gguf`

Build the backend:
`docker build -t chatbot .`
`kubectl create ns chatbot`
`kubectl apply -f chatbot.yaml -n chatbot`

Build the frontend. From /frontend: 

`docker build -t chatbot-api .`

Add to the mesh
`kubectl label namespace chatbot istio-injection=enabled`
`kubectl apply -f deplyment.yaml -n chatbot`
`kubectl apply -f frontend/gw.yaml -n chatbot`


Run (Note that the react app is pointing to localhost:6080): 
`kubectl port-forward svc/istio-ingressgateway 6080:80 -n istio-system`
