/**
 * @param {number[][] } maze
 * @returns string[]
 */

function helper(maze, r, c, path, ans)
{
    let n = maze.length

    if (r < 0 || c < 0 || r >= n || c >= n || maze[r][c] === 0 || maze[r][c] === -1)
    {
        return
    }

    if (r === n - 1 && c === n - 1)
    {
        ans.push(path)
        return
    }

    maze[r][c] = -1
    
    //Down
    helper(maze, r + 1, c, path + "D", ans)
    
    //Up
    helper(maze, r - 1, c, path + "U", ans)
    
    //Left
    helper(maze, r, c - 1, path + "L", ans)
    
    //Right
    helper(maze, r, c + 1, path + "R", ans)
    
    maze[r][c] = 1
}

function ratInMaze(maze)
{
    console.log(maze);
    let ans = []
    let path = ""

    helper(maze, 0, 0, path, ans)
    return ans
}

let maze = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
console.log(ratInMaze(maze));
