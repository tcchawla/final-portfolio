pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build'
                sh "npm run build"
            }
        }
        stage('Push') {
            steps {
                echo 'Push'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
    }
}