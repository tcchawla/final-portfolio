pipeline {
    agent {label slave}

    environment {
        function_name="test-func-react"
        region_name="us-east-1"
        bucket_name="s3-react-jenkins-pipe"
        bucket_key="build.zip"
    }

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