const { AuthenticationError } = require('apollo-server-express');
const { User, Colour, Shape, Service, Waxing, Relaxation, Acrylic} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  //  queries

  Query: {
    users: async () => {
      return User.find().populate("User");
    },
    colours: async () => {
      return Colour.find().populate("Colour");
    },
    shapes: async () => {
      return Shape.find().populate("Shape");
    },
    services: async () => {
      return Service.find().populate("Service");
    },
    waxings: async () => {
      return Waxing.find().populate("Waxing");
    },
    relaxations: async () => {
      return Relaxation.find().populate("Relaxation");
    },
    acrylics: async () => {
      return Service.find().populate("Acrylics");
    },
  },

  // mutations

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
