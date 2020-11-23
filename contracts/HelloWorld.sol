// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

// contract HelloWorld {
//   constructor() public {
//   }
// }


contract HelloWorld {
  string name = 'Celo';

  function getName() public view returns (string memory) {
    return name;
  }

  function setName(string calldata newName) external {
    name = newName;
  }
}