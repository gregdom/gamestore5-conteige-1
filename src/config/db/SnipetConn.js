import util from "util";
import conn from "./DBconnection.js";
export const query = util.promisify(conn.query).bind(conn);
