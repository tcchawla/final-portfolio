pipeline {
    agent any

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
                sh "zip build.zip index.js"
                sh "aws s3 cp ./build.zip s3://s3-react-jenkins-pipe"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
                sh "aws lambda update-function-code --function-name $function_name --region $region_name --s3-bucket $bucket_name --s3-key $bucket_key"
            }
        }
    }
}