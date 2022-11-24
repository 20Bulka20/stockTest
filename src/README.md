## To Run this application you need

#### 1) First you need to build client part.

- Go to  
  **cd stockTest/src/app/my-app**
- and fulfill:
  **npm run build**

#### 2) You need to build docker image

- Go to
  **cd stockTest/src**
- and fulfill:
  * **docker build -t stock-app .**
  * **docker run -it --rm -p 8080:8080 stock-app**
