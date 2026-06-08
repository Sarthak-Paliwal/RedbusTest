pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run BookBus Test') {
            steps {
                bat 'npx playwright test tests/BookBus.spec.ts'
            }
        }

    }
}