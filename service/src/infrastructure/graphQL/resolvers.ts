import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getProduct: async (_, { id }) => {
      return await prisma.product.findUnique({
        where: { id },
      });
    },
    getAllProducts: async () => {
      return await prisma.product.findMany();
    },
  },
  Mutation: {
    createProduct: async (_, { name, description, price }) => {
      return await prisma.product.create({
        data: {
          name,
          description,
          price,
          deleted: false,
        },
      });
    },
    deleteProduct: async (_, { id }) => {
      // Soft delete by setting the "deleted" flag to true
      const product = await prisma.product.update({
        where: { id },
        data: {
          deleted: true,
        },
      });
      return !!product; // Return true if the product was updated successfully
    },
  },
};

export default resolvers;
