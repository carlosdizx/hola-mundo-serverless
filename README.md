# Hello world with Serverless and Typescript 

## Pasos para poner a disposicion el proyecto
1. Clona el proyecto plantilla con el siguiente comando:
``` 
serverless create --path hello-world --template-url https://github.com/carlosdizx/hola-mundo-serverless
```
2. Instala las dependencias del proyecto ``` npm install ```
3. Configura las credenciales de AWS con el comando:
```
serverless config credentials --provider aws --key <tu-aws-access-key> --secret <tu-aws-secret-key>
```
4. Para subir el proyecto utiliza el comando ``` npm run deploy ```


