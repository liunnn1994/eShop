const findOrCreateFinance = function (router) {
  router.post("/api/find-or-create-finance", async (ctx) => {
    const { month, newRemarks, session, deviceID } = ctx.request.body;
    ctx.body = await require("../db/finance").findOrCreateFinance(
      month,
      newRemarks,
      session,
      deviceID
    );
  });
  return router;
};

const annualStatisticsFinance = function (router) {
  router.post("/api/annual-statistics-finance", async (ctx) => {
    const { year, session, deviceID } = ctx.request.body;
    ctx.body = await require("../db/finance").annualStatisticsFinance(
      year,
      session,
      deviceID
    );
  });
  return router;
};

exports.mutations = [findOrCreateFinance, annualStatisticsFinance];