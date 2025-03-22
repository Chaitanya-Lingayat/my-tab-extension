interface Example {
    input: string;
    output: string;
    explanation?: string;
}

interface LeetCodeProblem {
    title: string;
    titleSlug: string;
    difficulty: string;
    acRate: number;
    statement: string;
    category: string;
    examples: Example[];
}

export const BLIND_75_PROBLEMS: LeetCodeProblem[] = [
    // Array
    {
        title: "Two Sum",
        titleSlug: "two-sum",
        difficulty: "Easy",
        acRate: 49.3,
        category: "Array",
        statement: "Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target. You may assume that each input would have exactly one solution.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]"
            }
        ]
    },
    {
        title: "Best Time to Buy and Sell Stock",
        titleSlug: "best-time-to-buy-and-sell-stock",
        difficulty: "Easy",
        acRate: 54.2,
        category: "Array",
        statement: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5"
            }
        ]
    },
    {
        title: "Contains Duplicate",
        titleSlug: "contains-duplicate",
        difficulty: "Easy",
        acRate: 61.3,
        category: "Array",
        statement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "true",
                explanation: "1 appears twice in the array"
            }
        ]
    },
    {
        title: "Product of Array Except Self",
        titleSlug: "product-of-array-except-self",
        difficulty: "Medium",
        acRate: 65.1,
        category: "Array",
        statement: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
        examples: [
            {
                input: "nums = [1,2,3,4]",
                output: "[24,12,8,6]",
                explanation: "The product of all elements except nums[0] is 2*3*4=24, except nums[1] is 1*3*4=12, except nums[2] is 1*2*4=8, except nums[3] is 1*2*3=6"
            }
        ]
    },
    {
        title: "Maximum Subarray",
        titleSlug: "maximum-subarray",
        difficulty: "Medium",
        acRate: 50.1,
        category: "Array",
        statement: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6"
            }
        ]
    },
    {
        title: "Maximum Product Subarray",
        titleSlug: "maximum-product-subarray",
        difficulty: "Medium",
        acRate: 34.7,
        category: "Array",
        statement: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
        examples: [
            {
                input: "nums = [2,3,-2,4]",
                output: "6",
                explanation: "The subarray [2,3] has the largest product 6"
            }
        ]
    },
    {
        title: "Find Minimum in Rotated Sorted Array",
        titleSlug: "find-minimum-in-rotated-sorted-array",
        difficulty: "Medium",
        acRate: 48.2,
        category: "Array",
        statement: "Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
        examples: [
            {
                input: "nums = [3,4,5,1,2]",
                output: "1",
                explanation: "The original array was [1,2,3,4,5] rotated 3 times"
            }
        ]
    },
    {
        title: "Search in Rotated Sorted Array",
        titleSlug: "search-in-rotated-sorted-array",
        difficulty: "Medium",
        acRate: 39.3,
        category: "Array",
        statement: "Given a rotated sorted array nums and a target value, return the index of target if it is in nums, or -1 if it is not in nums.",
        examples: [
            {
                input: "nums = [4,5,6,7,0,1,2], target = 0",
                output: "4",
                explanation: "The target value 0 is found at index 4"
            }
        ]
    },
    {
        title: "3Sum",
        titleSlug: "3sum",
        difficulty: "Medium",
        acRate: 32.4,
        category: "Array",
        statement: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        examples: [
            {
                input: "nums = [-1,0,1,2,-1,-4]",
                output: "[[-1,-1,2],[-1,0,1]]",
                explanation: "The triplets that sum to 0 are [-1,-1,2] and [-1,0,1]"
            }
        ]
    },
    {
        title: "Container With Most Water",
        titleSlug: "container-with-most-water",
        difficulty: "Medium",
        acRate: 54.1,
        category: "Array",
        statement: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap.",
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. The maximum area of water that can be contained is 49"
            }
        ]
    },
    // Binary
    {
        title: "Sum of Two Integers",
        titleSlug: "sum-of-two-integers",
        difficulty: "Medium",
        acRate: 49.8,
        category: "Binary",
        statement: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
        examples: [
            {
                input: "a = 1, b = 2",
                output: "3",
                explanation: "1 + 2 = 3"
            }
        ]
    },
    {
        title: "Number of 1 Bits",
        titleSlug: "number-of-1-bits",
        difficulty: "Easy",
        acRate: 64.2,
        category: "Binary",
        statement: "Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
        examples: [
            {
                input: "n = 00000000000000000000000000001011",
                output: "3",
                explanation: "The input binary string has three '1' bits"
            }
        ]
    },
    {
        title: "Counting Bits",
        titleSlug: "counting-bits",
        difficulty: "Easy",
        acRate: 75.2,
        category: "Binary",
        statement: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
        examples: [
            {
                input: "n = 2",
                output: "[0,1,1]",
                explanation: "0 has 0 1's in binary, 1 has 1 1's in binary, and 2 has 1 1's in binary"
            }
        ]
    },
    {
        title: "Missing Number",
        titleSlug: "missing-number",
        difficulty: "Easy",
        acRate: 62.1,
        category: "Binary",
        statement: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        examples: [
            {
                input: "nums = [3,0,1]",
                output: "2",
                explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number"
            }
        ]
    },
    {
        title: "Reverse Bits",
        titleSlug: "reverse-bits",
        difficulty: "Easy",
        acRate: 51.8,
        category: "Binary",
        statement: "Reverse bits of a given 32 bits unsigned integer.",
        examples: [
            {
                input: "n = 00000010100101000001111010011100",
                output: "964176192",
                explanation: "The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192"
            }
        ]
    },
    // Dynamic Programming
    {
        title: "Climbing Stairs",
        titleSlug: "climbing-stairs",
        difficulty: "Easy",
        acRate: 51.4,
        category: "Dynamic Programming",
        statement: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [
            {
                input: "n = 3",
                output: "3",
                explanation: "There are three ways to climb to the top: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step"
            }
        ]
    },
    {
        title: "Coin Change",
        titleSlug: "coin-change",
        difficulty: "Medium",
        acRate: 42.7,
        category: "Dynamic Programming",
        statement: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
        examples: [
            {
                input: "coins = [1,2,5], amount = 11",
                output: "3",
                explanation: "11 = 5 + 5 + 1"
            }
        ]
    },
    {
        title: "Longest Increasing Subsequence",
        titleSlug: "longest-increasing-subsequence",
        difficulty: "Medium",
        acRate: 52.1,
        category: "Dynamic Programming",
        statement: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        examples: [
            {
                input: "nums = [10,9,2,5,3,7,101,18]",
                output: "4",
                explanation: "The longest increasing subsequence is [2,3,7,101], therefore the length is 4"
            }
        ]
    },
    {
        title: "Word Break",
        titleSlug: "word-break",
        difficulty: "Medium",
        acRate: 45.7,
        category: "Dynamic Programming",
        statement: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
        examples: [
            {
                input: 'string = "leetcode", wordDict = ["leet","code"]',
                output: "true",
                explanation: 'Return true because "leetcode" can be segmented as "leet code"'
            }
        ]
    },
    {
        title: "Combination Sum IV",
        titleSlug: "combination-sum-iv",
        difficulty: "Medium",
        acRate: 52.8,
        category: "Dynamic Programming",
        statement: "Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.",
        examples: [
            {
                input: "nums = [1,2,3], target = 4",
                output: "7",
                explanation: "The possible combinations are (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2), (1,3), (3,1)"
            }
        ]
    },
    {
        title: "House Robber",
        titleSlug: "house-robber",
        difficulty: "Medium",
        acRate: 48.7,
        category: "Dynamic Programming",
        statement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. You cannot rob adjacent houses. Return the maximum amount of money you can rob tonight.",
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "4",
                explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4"
            }
        ]
    },
    {
        title: "House Robber II",
        titleSlug: "house-robber-ii",
        difficulty: "Medium",
        acRate: 40.8,
        category: "Dynamic Programming",
        statement: "You are a professional robber planning to rob houses arranged in a circle. Return the maximum amount of money you can rob tonight without alerting the police.",
        examples: [
            {
                input: "nums = [2,3,2]",
                output: "3",
                explanation: "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent in a circle. Rob house 2 (money = 3) instead"
            }
        ]
    },
    {
        title: "Decode Ways",
        titleSlug: "decode-ways",
        difficulty: "Medium",
        acRate: 32.6,
        category: "Dynamic Programming",
        statement: "Given a string s containing only digits, return the number of ways to decode it.",
        examples: [
            {
                input: 's = "12"',
                output: "2",
                explanation: '"12" could be decoded as "AB" (1 2) or "L" (12)'
            }
        ]
    },
    {
        title: "Unique Paths",
        titleSlug: "unique-paths",
        difficulty: "Medium",
        acRate: 62.5,
        category: "Dynamic Programming",
        statement: "Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
        examples: [
            {
                input: "m = 3, n = 7",
                output: "28",
                explanation: "From the top-left corner, there are a total of 28 unique paths to reach the bottom-right corner"
            }
        ]
    },
    {
        title: "Jump Game",
        titleSlug: "jump-game",
        difficulty: "Medium",
        acRate: 38.9,
        category: "Dynamic Programming",
        statement: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
        examples: [
            {
                input: "nums = [2,3,1,1,4]",
                output: "true",
                explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index"
            }
        ]
    },
    // Graph
    {
        title: "Clone Graph",
        titleSlug: "clone-graph",
        difficulty: "Medium",
        acRate: 48.9,
        category: "Graph",
        statement: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
        examples: [
            {
                input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
                output: "[[2,4],[1,3],[2,4],[1,3]]",
                explanation: "Each node contains a list of its neighbors. Node 1's neighbors are nodes 2 and 4, node 2's neighbors are nodes 1 and 3, and so on"
            }
        ]
    },
    {
        title: "Course Schedule",
        titleSlug: "course-schedule",
        difficulty: "Medium",
        acRate: 45.8,
        category: "Graph",
        statement: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
        examples: [
            {
                input: "numCourses = 2, prerequisites = [[1,0]]",
                output: "true",
                explanation: "There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible"
            }
        ]
    },
    {
        title: "Pacific Atlantic Water Flow",
        titleSlug: "pacific-atlantic-water-flow",
        difficulty: "Medium",
        acRate: 54.2,
        category: "Graph",
        statement: "Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the Pacific ocean touches the left and top edges of the matrix and the Atlantic ocean touches the right and bottom edges. Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.",
        examples: [
            {
                input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
                output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
                explanation: "Water can only flow from a cell to another one with height equal or lower"
            }
        ]
    },
    {
        title: "Number of Islands",
        titleSlug: "number-of-islands",
        difficulty: "Medium",
        acRate: 56.7,
        category: "Graph",
        statement: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
        examples: [
            {
                input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
                output: "1",
                explanation: "The grid represents one island surrounded by water"
            }
        ]
    },
    {
        title: "Longest Consecutive Sequence",
        titleSlug: "longest-consecutive-sequence",
        difficulty: "Medium",
        acRate: 48.5,
        category: "Graph",
        statement: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
        examples: [
            {
                input: "nums = [100,4,200,1,3,2]",
                output: "4",
                explanation: "The longest consecutive elements sequence is [1,2,3,4]. Therefore its length is 4"
            }
        ]
    },
    // Interval
    {
        title: "Insert Interval",
        titleSlug: "insert-interval",
        difficulty: "Medium",
        acRate: 39.1,
        category: "Interval",
        statement: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).",
        examples: [
            {
                input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
                output: "[[1,5],[6,9]]",
                explanation: "The new interval [2,5] overlaps with [1,3], so they are merged into [1,5]"
            }
        ]
    },
    {
        title: "Merge Intervals",
        titleSlug: "merge-intervals",
        difficulty: "Medium",
        acRate: 46.1,
        category: "Interval",
        statement: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        examples: [
            {
                input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
                output: "[[1,6],[8,10],[15,18]]",
                explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]"
            }
        ]
    },
    {
        title: "Non-overlapping Intervals",
        titleSlug: "non-overlapping-intervals",
        difficulty: "Medium",
        acRate: 48.3,
        category: "Interval",
        statement: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
        examples: [
            {
                input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
                output: "1",
                explanation: "Remove [1,3] and the remaining intervals are non-overlapping"
            }
        ]
    },
    // Linked List
    {
        title: "Reverse Linked List",
        titleSlug: "reverse-linked-list",
        difficulty: "Easy",
        acRate: 73.1,
        category: "Linked List",
        statement: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]",
                explanation: "The linked list is reversed"
            }
        ]
    },
    {
        title: "Linked List Cycle",
        titleSlug: "linked-list-cycle",
        difficulty: "Easy",
        acRate: 46.5,
        category: "Linked List",
        statement: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
        examples: [
            {
                input: "head = [3,2,0,-4], pos = 1",
                output: "true",
                explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)"
            }
        ]
    },
    {
        title: "Merge Two Sorted Lists",
        titleSlug: "merge-two-sorted-lists",
        difficulty: "Easy",
        acRate: 62.5,
        category: "Linked List",
        statement: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.",
        examples: [
            {
                input: "list1 = [1,2,4], list2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
                explanation: "The two lists are merged in sorted order"
            }
        ]
    },
    {
        title: "Merge k Sorted Lists",
        titleSlug: "merge-k-sorted-lists",
        difficulty: "Hard",
        acRate: 48.8,
        category: "Linked List",
        statement: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
        examples: [
            {
                input: "lists = [[1,4,5],[1,3,4],[2,6]]",
                output: "[1,1,2,3,4,4,5,6]",
                explanation: "The linked lists are merged in sorted order"
            }
        ]
    },
    {
        title: "Remove Nth Node From End of List",
        titleSlug: "remove-nth-node-from-end-of-list",
        difficulty: "Medium",
        acRate: 42.1,
        category: "Linked List",
        statement: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        examples: [
            {
                input: "head = [1,2,3,4,5], n = 2",
                output: "[1,2,3,5]",
                explanation: "After removing the second node from the end, the linked list becomes [1,2,3,5]"
            }
        ]
    },
    {
        title: "Reorder List",
        titleSlug: "reorder-list",
        difficulty: "Medium",
        acRate: 54.7,
        category: "Linked List",
        statement: "You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
        examples: [
            {
                input: "head = [1,2,3,4]",
                output: "[1,4,2,3]",
                explanation: "The list is reordered to: 1->4->2->3"
            }
        ]
    },
    // Matrix
    {
        title: "Set Matrix Zeroes",
        titleSlug: "set-matrix-zeroes",
        difficulty: "Medium",
        acRate: 50.8,
        category: "Matrix",
        statement: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.",
        examples: [
            {
                input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
                output: "[[1,0,1],[0,0,0],[1,0,1]]",
                explanation: "The 0 at position (1,1) causes its entire row and column to be set to 0"
            }
        ]
    },
    {
        title: "Spiral Matrix",
        titleSlug: "spiral-matrix",
        difficulty: "Medium",
        acRate: 44.3,
        category: "Matrix",
        statement: "Given an m x n matrix, return all elements of the matrix in spiral order.",
        examples: [
            {
                input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                output: "[1,2,3,6,9,8,7,4,5]",
                explanation: "The elements are returned in spiral order"
            }
        ]
    },
    {
        title: "Rotate Image",
        titleSlug: "rotate-image",
        difficulty: "Medium",
        acRate: 69.9,
        category: "Matrix",
        statement: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
        examples: [
            {
                input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                output: "[[7,4,1],[8,5,2],[9,6,3]]",
                explanation: "The matrix is rotated 90 degrees clockwise"
            }
        ]
    },
    {
        title: "Word Search",
        titleSlug: "word-search",
        difficulty: "Medium",
        acRate: 39.8,
        category: "Matrix",
        statement: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
        examples: [
            {
                input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
                output: "true",
                explanation: "The word 'ABCCED' can be found by following adjacent characters"
            }
        ]
    },
    // String
    {
        title: "Longest Substring Without Repeating Characters",
        titleSlug: "longest-substring-without-repeating-characters",
        difficulty: "Medium",
        acRate: 33.8,
        category: "String",
        statement: "Given a string s, find the length of the longest substring without repeating characters.",
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: "The answer is 'abc', with the length of 3"
            }
        ]
    },
    {
        title: "Longest Repeating Character Replacement",
        titleSlug: "longest-repeating-character-replacement",
        difficulty: "Medium",
        acRate: 51.2,
        category: "String",
        statement: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.",
        examples: [
            {
                input: 's = "ABAB", k = 2',
                output: "4",
                explanation: "Replace the two 'A's with two 'B's or vice versa"
            }
        ]
    },
    {
        title: "Minimum Window Substring",
        titleSlug: "minimum-window-substring",
        difficulty: "Hard",
        acRate: 40.8,
        category: "String",
        statement: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string ''.",
        examples: [
            {
                input: 's = "ADOBECODEBANC", t = "ABC"',
                output: '"BANC"',
                explanation: "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t"
            }
        ]
    },
    {
        title: "Valid Anagram",
        titleSlug: "valid-anagram",
        difficulty: "Easy",
        acRate: 63.2,
        category: "String",
        statement: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        examples: [
            {
                input: 's = "anagram", t = "nagaram"',
                output: "true",
                explanation: "The strings contain the same characters in different orders"
            }
        ]
    },
    {
        title: "Group Anagrams",
        titleSlug: "group-anagrams",
        difficulty: "Medium",
        acRate: 65.8,
        category: "String",
        statement: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        examples: [
            {
                input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
                output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
                explanation: "The strings can be grouped by their anagrams"
            }
        ]
    },
    {
        title: "Valid Parentheses",
        titleSlug: "valid-parentheses",
        difficulty: "Easy",
        acRate: 40.1,
        category: "String",
        statement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        examples: [
            {
                input: 's = "()[]{}"',
                output: "true",
                explanation: "The brackets are properly closed in the correct order"
            }
        ]
    },
    {
        title: "Valid Palindrome",
        titleSlug: "valid-palindrome",
        difficulty: "Easy",
        acRate: 43.8,
        category: "String",
        statement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: "After cleaning, 'amanaplanacanalpanama' reads the same forward and backward"
            }
        ]
    },
    {
        title: "Longest Palindromic Substring",
        titleSlug: "longest-palindromic-substring",
        difficulty: "Medium",
        acRate: 32.4,
        category: "String",
        statement: "Given a string s, return the longest palindromic substring in s.",
        examples: [
            {
                input: 's = "babad"',
                output: '"bab"',
                explanation: '"aba" is also a valid answer'
            }
        ]
    },
    {
        title: "Palindromic Substrings",
        titleSlug: "palindromic-substrings",
        difficulty: "Medium",
        acRate: 66.8,
        category: "String",
        statement: "Given a string s, return the number of palindromic substrings in it.",
        examples: [
            {
                input: 's = "abc"',
                output: "3",
                explanation: "All palindromic substrings are: 'a', 'b', 'c'"
            }
        ]
    },
    {
        title: "Encode and Decode Strings",
        titleSlug: "encode-and-decode-strings",
        difficulty: "Medium",
        acRate: 45.2,
        category: "String",
        statement: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
        examples: [
            {
                input: 'strs = ["Hello","World"]',
                output: 'encode(strs) -> "5#Hello5#World", decode("5#Hello5#World") -> ["Hello","World"]',
                explanation: "The strings are encoded with their lengths and a delimiter"
            }
        ]
    },
    // Tree
    {
        title: "Maximum Depth of Binary Tree",
        titleSlug: "maximum-depth-of-binary-tree",
        difficulty: "Easy",
        acRate: 73.8,
        category: "Tree",
        statement: "Given the root of a binary tree, return its maximum depth.",
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "3",
                explanation: "The maximum depth is the number of nodes along the longest path from root to leaf"
            }
        ]
    },
    {
        title: "Same Tree",
        titleSlug: "same-tree",
        difficulty: "Easy",
        acRate: 58.9,
        category: "Tree",
        statement: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
        examples: [
            {
                input: "p = [1,2,3], q = [1,2,3]",
                output: "true",
                explanation: "The trees have identical structure and values"
            }
        ]
    },
    {
        title: "Invert Binary Tree",
        titleSlug: "invert-binary-tree",
        difficulty: "Easy",
        acRate: 74.1,
        category: "Tree",
        statement: "Given the root of a binary tree, invert the tree, and return its root.",
        examples: [
            {
                input: "root = [4,2,7,1,3,6,9]",
                output: "[4,7,2,9,6,3,1]",
                explanation: "Each node's left and right children are swapped"
            }
        ]
    },
    {
        title: "Binary Tree Maximum Path Sum",
        titleSlug: "binary-tree-maximum-path-sum",
        difficulty: "Hard",
        acRate: 39.1,
        category: "Tree",
        statement: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Find the maximum path sum.",
        examples: [
            {
                input: "root = [1,2,3]",
                output: "6",
                explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6"
            }
        ]
    },
    {
        title: "Binary Tree Level Order Traversal",
        titleSlug: "binary-tree-level-order-traversal",
        difficulty: "Medium",
        acRate: 64.8,
        category: "Tree",
        statement: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level)",
        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "[[3],[9,20],[15,7]]",
                explanation: "The nodes are visited level by level from top to bottom"
            }
        ]
    },
    {
        title: "Serialize and Deserialize Binary Tree",
        titleSlug: "serialize-and-deserialize-binary-tree",
        difficulty: "Hard",
        acRate: 55.3,
        category: "Tree",
        statement: "Design an algorithm to serialize and deserialize a binary tree.",
        examples: [
            {
                input: "root = [1,2,3,null,null,4,5]",
                output: "[1,2,3,null,null,4,5]",
                explanation: "The tree is serialized into a string and then deserialized back to the same tree structure"
            }
        ]
    },
    {
        title: "Subtree of Another Tree",
        titleSlug: "subtree-of-another-tree",
        difficulty: "Easy",
        acRate: 45.9,
        category: "Tree",
        statement: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
        examples: [
            {
                input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
                output: "true",
                explanation: "The tree rooted at node 4 in the main tree is identical to the subRoot tree"
            }
        ]
    },
    {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        titleSlug: "construct-binary-tree-from-preorder-and-inorder-traversal",
        difficulty: "Medium",
        acRate: 61.3,
        category: "Tree",
        statement: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
        examples: [
            {
                input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
                output: "[3,9,20,null,null,15,7]",
                explanation: "The binary tree is constructed using the preorder and inorder traversals"
            }
        ]
    },
    {
        title: "Validate Binary Search Tree",
        titleSlug: "validate-binary-search-tree",
        difficulty: "Medium",
        acRate: 31.9,
        category: "Tree",
        statement: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        examples: [
            {
                input: "root = [2,1,3]",
                output: "true",
                explanation: "The tree follows BST properties: left subtree values < node value < right subtree values"
            }
        ]
    },
    {
        title: "Kth Smallest Element in a BST",
        titleSlug: "kth-smallest-element-in-a-bst",
        difficulty: "Medium",
        acRate: 69.5,
        category: "Tree",
        statement: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
        examples: [
            {
                input: "root = [3,1,4,null,2], k = 1",
                output: "1",
                explanation: "The 1st smallest element in the BST is 1"
            }
        ]
    },
    {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        titleSlug: "lowest-common-ancestor-of-a-binary-search-tree",
        difficulty: "Medium",
        acRate: 61.5,
        category: "Tree",
        statement: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
        examples: [
            {
                input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
                output: "6",
                explanation: "The LCA of nodes 2 and 8 is 6"
            }
        ]
    },
    // Heap
    {
        title: "Find Median from Data Stream",
        titleSlug: "find-median-from-data-stream",
        difficulty: "Hard",
        acRate: 51.2,
        category: "Heap",
        statement: "Design a data structure that supports adding integers and finding the median of the stream.",
        examples: [
            {
                input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
                output: "[null,null,1.5,null,2.0]",
                explanation: "After adding 1 and 2, median is 1.5. After adding 3, median becomes 2.0"
            }
        ]
    },
    {
        title: "Top K Frequent Elements",
        titleSlug: "top-k-frequent-elements",
        difficulty: "Medium",
        acRate: 56.1,
        category: "Heap",
        statement: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
        examples: [
            {
                input: "nums = [1,1,1,2,2,3], k = 2",
                output: "[1,2]",
                explanation: "1 appears three times, 2 appears twice, and 3 appears once. So the two most frequent elements are 1 and 2"
            }
        ]
    },
    // Trie
    {
        title: "Implement Trie (Prefix Tree)",
        titleSlug: "implement-trie-prefix-tree",
        difficulty: "Medium",
        acRate: 61.5,
        category: "Trie",
        statement: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.",
        examples: [
            {
                input: "insert('apple'), search('apple'), search('app'), startsWith('app')",
                output: "[null,true,false,true]",
                explanation: "The word 'apple' is inserted and can be found, 'app' is not a complete word but is a prefix"
            }
        ]
    },
    {
        title: "Design Add and Search Words Data Structure",
        titleSlug: "design-add-and-search-words-data-structure",
        difficulty: "Medium",
        acRate: 44.6,
        category: "Trie",
        statement: "Design a data structure that supports adding new words and finding if a string matches any previously added string.",
        examples: [
            {
                input: "addWord('bad'), addWord('dad'), search('pad'), search('bad'), search('.ad'), search('b..')",
                output: "[null,null,false,true,true,true]",
                explanation: "'.ad' matches 'bad' and 'dad', 'b..' matches 'bad'"
            }
        ]
    },
    {
        title: "Word Search II",
        titleSlug: "word-search-ii",
        difficulty: "Hard",
        acRate: 36.9,
        category: "Trie",
        statement: "Given an m x n board of characters and a list of strings words, return all words on the board.",
        examples: [
            {
                input: "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], words = ['oath','pea','eat','rain']",
                output: "['eat','oath']",
                explanation: "The words 'eat' and 'oath' can be found on the board by connecting adjacent letters"
            }
        ]
    }
];

export const getRandomProblem = (): LeetCodeProblem => {
    return BLIND_75_PROBLEMS[Math.floor(Math.random() * BLIND_75_PROBLEMS.length)];
};

export const getProblemsByCategory = (category: string): LeetCodeProblem[] => {
    return BLIND_75_PROBLEMS.filter(problem => problem.category === category);
};

export const getCategories = (): string[] => {
    return Array.from(new Set(BLIND_75_PROBLEMS.map(problem => problem.category)));
}; 