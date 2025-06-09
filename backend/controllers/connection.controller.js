export const sendConnectionRequest = async (req, res) => {
  res.send("send connection request");
};
export const acceptConnectionRequest = async (req, res) => {
  res.send("accept connection request");
};
export const rejectConnectionRequest = async (req, res) => {
  res.send("reject connection request");
};
export const getConnectionRequests = async (req, res) => {
  res.send("get connection request");
};
export const getUserConnections = async (req, res) => {
  res.send("get user connections ");
};
export const removeConnection = async (req, res) => {
  res.send("remove connection");
};
export const getConnectionStatus = async (req, res) => {
  res.send("get connection status");
};
