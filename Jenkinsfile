pipeline {
    agent { label 'slave' }


    stages {
        stage('Build') {
            steps {
                echo 'Build'
                sh "echo slave | sudo -S -u ubuntu whoami"
                sh "npm ci --production"
                sh "npm run build"
            }
        }
        stage('Push') {
            steps {
                echo 'Push'
                sh "aws s3 sync build/ s3://jenkins-slave-push"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
    }
}