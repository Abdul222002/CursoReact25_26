
const API_URL = "http://192.168.50.120:1495";

async function testAuth() {
  console.log("Testing Login...");
  try {
    const loginRes = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "alumno@test.com", password: "123456" })
    });

    if (!loginRes.ok) {
        console.error("Login Failed:", loginRes.status, await loginRes.text());
        return;
    }

    const loginData = await loginRes.json();
    console.log("Login Response:", JSON.stringify(loginData, null, 2));

    const token = loginData.data?.token;
    if (!token) {
        console.error("No token found in login response");
        return;
    }

    console.log("\nTesting GetMe...");
    const meRes = await fetch(`${API_URL}/api/auth/me`, {
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (!meRes.ok) {
        console.error("GetMe Failed:", meRes.status, await meRes.text());
        return;
    }

    const meData = await meRes.json();
    console.log("GetMe Response:", JSON.stringify(meData, null, 2));

  } catch (error) {
    console.error("Error:", error);
  }
}

testAuth();
