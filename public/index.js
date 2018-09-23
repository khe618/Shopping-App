//Initial angular module and define utility functions
var app = angular.module("shoppingApp", [])
app.constant("movies", movies)
	
/**
 * Sums an array of numbers
 * @param {Array<Number>} arr: List of numbers
 * @return {Number}: Sum of numbers
 */
function sum(arr){
	return arr.reduce((a,b) => a+b, 0)
}

/**
 * Checks if arr1 is a subarray of arr2
 * Note that isSubarray([], []) returns True, since the empty set is a subset of every set
 * @param {Array<String>} arr1: List of strings checked as subarray
 * @param {Array<String>} arr2: List of strings checked as superarray
 * @return {boolean} True if every element of arr1 is in arr2
 */
function isSubarray(arr1, arr2){
	return arr1.every(val => arr2.includes(val))
}