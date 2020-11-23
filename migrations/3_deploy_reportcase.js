var ReportCase = artifacts.require("./contracts/ReportCase.sol");

module.exports = function(deployer) {
  deployer.deploy(ReportCase)
}