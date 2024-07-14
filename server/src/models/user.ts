import mongoose from "mongoose";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  triplist: any;
  wishlist: any;
  propertylist: any;
  reservationlist: any;
}

const userSchema = new mongoose.Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
    },
    triplist: {
      type: Array,
      default: [],
    },
    wishlist: {
      type: Array,
      default: [],
    },
    propertylist: {
      type: Array,
      default: [],
    },
    reservationlist: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
