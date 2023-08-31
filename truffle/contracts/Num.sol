// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Num {

    uint public number = 0;

    constructor(){
        number = 0;
    }

    event NumberIncreased(uint newValue);

    function increase() public {
        number += 1;
    }

    function decrease() public {
        number -= 1;
    }

    function getNum() public view returns (uint){
        return number;
    }
}