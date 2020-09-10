const mergeResolver = (modules: any) => {
  let Query = {};
  let Mutation = {};
  let Subscription = {};

  Object.keys(modules).forEach((key) => {
    Query = { ...Query, ...modules[key].Query };
    Mutation = { ...Mutation, ...modules[key].Mutation };
    Subscription = { ...Subscription, ...modules[key].Subscription };
  });

  return {
    Query,
  };
};
export default mergeResolver;
