export type Project = {
  title: string
  eyebrow: string
  description: string
  tags: string[]
  url: string
  status?: string
}

export const projects: Project[] = [
  { title: 'AWS Infrastructure with Terraform', eyebrow: 'Infrastructure', description: 'Infrastructure-as-Code projects demonstrating AWS networking, IAM, reusable Terraform modules and automated infrastructure provisioning.', tags: ['AWS', 'Terraform', 'GitHub Actions'], url: 'REPLACE_WITH_AWS_REPOSITORY_URL' },
  { title: 'CI/CD Engineering', eyebrow: 'Delivery systems', description: 'Hands-on CI/CD implementations using GitHub Actions and Jenkins, covering automated builds, testing, security checks and deployment workflows.', tags: ['GitHub Actions', 'Jenkins', 'Git', 'Docker'], url: 'REPLACE_WITH_CICD_REPOSITORY_URL' },
  { title: 'Kubernetes Platform', eyebrow: 'Cloud native', description: 'Containerized application deployment and Kubernetes-based CI/CD using Docker and Kubernetes environments.', tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'], url: 'REPLACE_WITH_KUBERNETES_REPOSITORY_URL' },
  { title: 'Ansible Automation', eyebrow: 'Operations', description: 'Automation workflows using Ansible and AWX for repeatable configuration and operational tasks.', tags: ['Ansible', 'AWX', 'Python', 'Linux'], url: 'REPLACE_WITH_ANSIBLE_REPOSITORY_URL' },
  { title: 'Python Automation', eyebrow: 'Tooling', description: 'Python automation and API development projects using Python and FastAPI.', tags: ['Python', 'FastAPI', 'REST API', 'Automation'], url: 'REPLACE_WITH_PYTHON_REPOSITORY_URL' },
  { title: 'GCP', eyebrow: 'Cloud experiments', description: 'Hands-on Google Cloud infrastructure and automation experiments.', tags: ['GCP', 'Terraform', 'Cloud Automation'], url: 'REPLACE_WITH_GCP_REPOSITORY_URL' },
  { title: 'MLOps', eyebrow: 'Learning / In Progress', description: 'Exploring the intersection of machine learning, cloud infrastructure, automation, CI/CD and platform engineering.', tags: ['Python', 'Cloud', 'Docker', 'Kubernetes', 'MLOps'], url: 'REPLACE_WITH_MLOPS_REPOSITORY_URL', status: 'Learning / In Progress' },
]