# kubernetes-example

Example Node.js web server running with Kubernetes and showcasing the use of secrets, configmaps, the Kubernetes downward API. Also uses skaffold for easy development and includes hot reloading with the `sync` feature.

`kubectl create secret -f secret.yml`

`kubectl create configmap -f config-map.yml`

`skaffold dev`
