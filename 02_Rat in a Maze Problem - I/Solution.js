/**
 * @param {number[][] } maze
 * @returns string[]
 */

function helper(maze, r, c, path, ans, visited)
{
    let n = maze.length

    if (r < 0 || c < 0 || r >= n || c >= n || maze[r][c] === 0 || visited[r][c] === true)
    {
        return
    }

    if (r === n - 1 && c === n - 1)
    {
        ans.push(path)
        return
    }


    visited[r][c] = true

    //Down
    helper(maze, r + 1, c, path + "D", ans, visited)

    //Up
    helper(maze, r - 1, c, path + "U", ans, visited)

    //Left
    helper(maze, r, c - 1, path + "L", ans, visited)

    //Right
    helper(maze, r, c + 1, path + "R", ans, visited)
    visited[r][c] = false

}

function ratInMaze(maze)
{
    console.log(maze);
    let ans = []
    let path = ""

    let visited = maze.map(row => row.map(() => false))


    helper(maze, 0, 0, path, ans, visited)
    return ans
}

let maze = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
console.log(ratInMaze(maze));
