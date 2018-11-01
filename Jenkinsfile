pipeline {
    agent any

    stages {
        stage('Build Angular Frontend App') {
            steps {
                echo 'Building Angular..'
                bat 'cd ./13_NODE.JS_Assignment_2_MEAN/e-stationarymart-ui/ && npm install && npm run build --prod'
            }
        }
        stage('Build Node Backend App') {
            steps {
                echo 'Building Nodejs ..'
                bat 'cd ./13_NODE.JS_Assignment_2_MEAN/e-stationarymart-backend/ && npm install'
            }
        }
        stage('Testing Frontend') {
            steps {
                echo 'Testing Frontend...'
                at 'cd ./13_NODE.JS_Assignment_2_MEAN/e-stationarymart-ui/ && npm test'
            }
        }
        stage('Testing Backend') {
            steps {
                echo 'Testing Backend...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}