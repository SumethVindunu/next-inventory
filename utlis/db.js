import mongoose from 'mongoose';

const MONGOURL = process.env.MONGOURL;
if(!MONGOURL){
    throw new Error(
        "MONGOURL is not defined" 
    );
}

let cached = global.mongooseConn;
if (!cached) {
    cached = global.mongooseConn = {conn: null, promise: null};
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3619921751.
async function connect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGOURL).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;

}
export default connect;
