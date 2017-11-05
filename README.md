# Kubernetes Local Dev Demo

Showcase of a node app development workflow with minikube, babel and nodemon

## Required Software

- [Minikube](https://github.com/kubernetes/minikube/releases)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)

**Additional**:

- [Visual Studio Code](https://code.visualstudio.com/download)

## Developing

Install dependencies

```shell
yarn
```

Start your local kubernetes cluster

```shell
minikube start
```

Generate local kubernetes dev config

```shell
yarn setup-dev
```

Deploy app to your kubernetes cluster

```shell
kubectl apply -f kube/dev.local.yaml
```

Accessing the app logs

```shell
kubectl attach $(kubectl get pods -o jsonpath='{.items[*].metadata.name}' | grep sample-app)
```

Stopping the app on the kubernetes cluster

```shell
kubectl delete -f kube/dev.local.yaml
```

Stopping minikube

```shell
minikube stop
```

## "Production"

Building the docker image

```shell
./scripts/build-image.sh
```


## Useful Resources

- http://blog.frankgrecojr.com/k8s-local-dev/
- https://github.com/frankgreco/k8s-local-dev
