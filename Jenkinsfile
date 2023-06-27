pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build'
                sh "npm ci --production"
                sh "npm run build"
            }
        }
        stage('Push') {
            steps {
                echo 'Push'
                sh "aws s3 cp ./build/ s3://s3-react-jenkins-pipe"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
    }
}