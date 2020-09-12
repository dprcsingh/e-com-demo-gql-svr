import products from './dummyData';
const query = {
  getProducts: async (parent: any, args: any, context: any) => {
    const ProductArray: any = [];
    const cursor = await context.db.collection('products').find();
    const totalCount = await cursor.count();
    await cursor.forEach((data: any) => ProductArray.push(data));
    const res = {
      message: 'success',
      status: 200,
      totalCount: 8,
      data: ProductArray,
    };
    return res;
  },
};
export default query;
