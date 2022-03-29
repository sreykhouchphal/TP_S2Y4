const fs = require('fs');
const path = require('path');

const readUsers = () => {
    let rawdata = fs.readFileSync(path.join(process.cwd(), 'database/user.json'), 'utf8');
    if (!rawdata) {
        return []
    }
    return JSON.parse(rawdata);

}

const writeUsers = async(data) => {
    fs.writeFileSync(path.join(process.cwd(), 'database/user.json'), JSON.stringify(data), 'utf8');

}

const updateUsers = async(data) => {

}


module.exports = {
    readUsers,
    writeUsers,
    updateUsers
}