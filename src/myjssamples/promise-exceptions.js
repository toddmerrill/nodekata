// question from the javascript slack channel

try {

  smthing()
  .then(function(data) {
    if (false) {
      // logic
      return true
    } else {throw("You can't send addresses to this call on behalf of user that is not on your device")}
  }).catch((e) => {throw(e)})

} catch(err) {
  // I want this block to be called
  logger.info(`Updating of addresses from ${socket.device.auth_token} failed due to reason: ${err}`);
  socket.emit(500, {action: "calls/address", message: err})
}
