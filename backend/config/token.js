
import jwt from "jsonwebtoken"


export const generateToken = (userId) => {
  try {
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET
    );
  } catch (error) {
    console.error("JWT generation error:", error);
    throw new Error("Token generation failed");
  }
};


export const generateToken1 = (email) => {
  try {
    return jwt.sign(
      { email},
      process.env.JWT_SECRET
    );
  } catch (error) {
    console.error("JWT generation error:", error);
    throw new Error("Token generation failed");
  }
};

