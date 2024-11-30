
## Running the app

1. Install all dependencies:

```bash
npm install
npm install nodemon
```

2. Create a .env and add:
```bash
PORT=3000
MONGODB_URI=your-uri
```

3. Run the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000).

4. Expected response
   ```bash
   {
        message: "Server Up",
        database: "DB Connected."
   }
   ```