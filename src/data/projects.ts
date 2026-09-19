export type Project = {
  title: string
  eyebrow: string
  description: string
  tags: string[]
  url: string
  status?: string
  caseStudyUrl?: string
}

export const projects: Project[] = [
  { title: 'AWS Infrastructure Automation', eyebrow: 'Infrastructure', description: 'Terraform-based AWS infrastructure demonstrating reusable modules, networking, IAM and Infrastructure-as-Code practices.', tags: ['AWS', 'Terraform', 'GitHub Actions'], url: 'REPLACE_WITH_AWS_REPOSITORY_URL' },
  { title: 'CI/CD Engineering', eyebrow: 'Delivery systems', description: 'Hands-on CI/CD workflows using GitHub Actions and Jenkins for automated build, validation, security and deployment.', tags: ['GitHub Actions', 'Jenkins', 'Git', 'Docker'], url: 'REPLACE_WITH_CICD_REPOSITORY_URL' },
  { title: 'Kubernetes Platform', eyebrow: 'Cloud native', description: 'Containerized application deployment and Kubernetes-based CI/CD using Docker and Kubernetes environments.', tags: ['Docker', 'Kubernetes', 'GitHub Actions'], url: 'REPLACE_WITH_KUBERNETES_REPOSITORY_URL' },
  { title: 'Ansible Automation', eyebrow: 'Operations', description: 'Repeatable infrastructure and operational automation using Ansible and AWX.', tags: ['Ansible', 'AWX', 'Python'], url: 'REPLACE_WITH_ANSIBLE_REPOSITORY_URL' },
  { title: 'Python Automation', eyebrow: 'Tooling', description: 'Python-based automation and API development using Python and FastAPI.', tags: ['Python', 'FastAPI', 'REST API'], url: 'REPLACE_WITH_PYTHON_REPOSITORY_URL' },
  { title: 'GCP Infrastructure', eyebrow: 'Cloud experiments', description: 'Hands-on Google Cloud infrastructure and automation experiments.', tags: ['GCP', 'Terraform'], url: 'REPLACE_WITH_GCP_REPOSITORY_URL' },
  { title: 'MLOps', eyebrow: 'Learning / In Progress', description: 'Exploring machine learning infrastructure, cloud automation, CI/CD and deployment practices for ML workloads.', tags: ['Python', 'Docker', 'Kubernetes', 'Cloud', 'MLOps'], url: 'REPLACE_WITH_MLOPS_REPOSITORY_URL', status: 'LEARNING / IN PROGRESS' },
]