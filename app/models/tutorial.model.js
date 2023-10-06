module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    course_rating: {
      type: Sequelize.FLOAT
    },
    prof_rating: {
      type: Sequelize.FLOAT
    },
    difficulty: {
      type: Sequelize.FLOAT
    },
    workload: {
      type: Sequelize.FLOAT
    }
  });

  return Tutorial;
};
