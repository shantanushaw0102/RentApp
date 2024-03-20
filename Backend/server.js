import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";
import multer from "multer";

const app = express();
const port = 5000;
const salt = 10;
const SECRET_KEY = "This is Rental App";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "UserLogin",
  password: "Raja@0102",
  port: 5432,
});
db.connect();

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "you are not authenticated" });
  } else {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not correct" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error for hashing password" });
    } else {
      console.log("Hashed Password:", hash);
      db.query(
        "INSERT INTO login(name,email,password) VALUES ($1,$2,$3)",
        [name, email, hash],
        (err, result) => {
          if (err) {
            return res.json({ Error: "Inserting data error in server" });
          }
          return res.json({ Status: "Success" });
        }
      );
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const loginPassword = req.body.password;
  db.query("SELECT * FROM login WHERE email = $1", [email], (err, data) => {
    if (err) {
      return res.json({ Error: "Login error in server" });
    }
    if (data.rows.length > 0) {
      const user = data.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(loginPassword, storedHashedPassword, (err, response) => {
        if (err) {
          return res.json({ Error: "Password compare error" });
        }
        if (response) {
          const name = user.name;
          const token = jwt.sign({ name }, SECRET_KEY, {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ Status: "Success" });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "no email existed" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// backend code for adding product to the data base and fetching them back from the database

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({
  storage: storage,
});

// upload data in data base.

app.post("/upload", uploadFile.single("image"), (req, res) => {
  const category = req.body.category;
  const name = req.body.name;
  const type = req.body.type;
  const brand = req.body.brand;
  const model = req.body.model;
  const seller = req.body.seller;
  const location = req.body.location;
  const year = req.body.year;
  const price = req.body.price;
  const desc = req.body.desc;
  const reviews = req.body.review;
  const comments = req.body.comments;
  const image = req.file.filename;
  db.query(
    "INSERT INTO product_data (p_category,p_name,p_type,p_brand,p_model,p_seller,p_location,p_year,p_price,p_description,p_reviews,p_comments,p_image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
    [
      category,
      name,
      type,
      brand,
      model,
      seller,
      location,
      year,
      price,
      desc,
      reviews,
      comments,
      image,
    ],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json({ Status: "Success" });
    }
  );
});

// fetching data from the db for displaying
app.get("/display", (req, res) => {
  db.query("SELECT * FROM  product_data   order by id asc", (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

//starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
