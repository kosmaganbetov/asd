/* eslint-disable react/prop-types */
const ProtectedRoute = ({ redirectUrl, children, outlet, user, Navigate }) => {
  if (!user) {
    return <Navigate to={redirectUrl} />;
  }
  return children || outlet;
};
export default ProtectedRoute;
