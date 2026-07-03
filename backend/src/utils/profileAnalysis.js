export const generateProfileAnalysis = (user) => {
  let score = 0;
  let insights = [];

  if (user.skills?.length >= 5) {
    score += 40;
    insights.push("Strong skill set");
  } else {
    insights.push("Add more technical skills");
  }

  if (user.location) {
    score += 10;
  }

  if (user.bio) {
    score += 10;
  }

  if (user.socialLinks?.linkedin) {
    score += 10;
  }

  if (user.socialLinks?.github) {
    score += 10;
  }

  if (user.socialLinks?.portfolio) {
    score += 10;
  }

  if (user.careerGoal?.desiredRole) {
    score += 10;
  }

  return {
    score,
    projectMatchProgress: score,
    insights: insights.join(", "),
  };
};