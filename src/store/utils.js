export const scrollTopAnimation = {
    initial: {
      y: 50,
      opacity: 0.3,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    }
};
  
export const staggerCardVarient = {
  initial: {
    opacity: 0.3,
  },
  animate: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};
