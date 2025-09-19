export async function hashPass(pass) {
    // 1. Convert string to bytes
    const encoder = new TextEncoder();
    const data = encoder.encode(pass);

    // 2. Hash the bytes using SHA-256
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    // 3. Convert ArrayBuffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}



export async function checkHash(hashedPass, pass){
    return hashedPass === pass
}