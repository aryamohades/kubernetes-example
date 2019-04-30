# kubernetes-example

Example simple Node.js web server running with Kubernetes. The app uses a simple `Deployment` and is exposed via a `Service` of type `LoadBalancer`. Showcases the use of Kubernetes secrets, configmaps, and the downward API (passing Pod info to container through environment variables). Also uses skaffold for easy local development and includes hot reloading with the `sync` feature.

Usage:

`kubectl create secret -f secret.yml`

`kubectl create configmap -f config-map.yml`

`skaffold dev`
