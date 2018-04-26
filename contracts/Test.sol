pragma solidity ^0.4.23;

contract Test {
    function test() public view returns(uint32, uint32) {
        return (uint32(block.timestamp), uint32(block.number));
    }

}