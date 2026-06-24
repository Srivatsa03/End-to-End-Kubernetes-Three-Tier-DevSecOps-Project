# End-to-End DevSecOps on AWS EKS

**A production-grade, three-tier application on Kubernetes with security baked into the pipeline, not bolted on after.**

## What it is

A full 3-tier cloud app (**8 microservices**) running on AWS EKS, deployed entirely through a GitOps pipeline with security gates at every stage. The goal was a platform that ships fast *and* refuses to ship something vulnerable.

## Architecture

```
Git push ──> Jenkins (build + test)
                 │
                 ├─ SonarQube  (code quality gate)
                 ├─ Trivy      (image vulnerability scan)
                 │
                 v
            ArgoCD (GitOps sync) ──> AWS EKS (8 microservices, 3 worker nodes)
                                          │
                            Prometheus + Grafana (metrics, alerts, runbooks)
```

- **Provisioning:** Terraform-managed infrastructure, IAM policies, and auto-scaling.
- **Delivery:** Jenkins for CI, ArgoCD for GitOps-style continuous delivery.
- **Security shift-left:** Trivy image scans and SonarQube quality gates block bad builds before they reach the cluster.
- **Operability:** Prometheus + Grafana dashboards, plus runbooks for node failures and network issues.

## Results

- Handles **500+ req/sec** with **zero-downtime deployments**.
- **100% of manual deployment effort eliminated.**
- **Incident response time cut by 40%.**

## Stack

`AWS EKS` · `Terraform` · `Jenkins` · `ArgoCD` · `Trivy` · `SonarQube` · `Prometheus` · `Grafana` · `Docker` · `Kubernetes`
