const CACHE_NAME="medaudit-pro-v2";
const APP_SHELL=["./","./medaudit_face_sheet_ocr_doctor_wide_camera.html","./master.html","./manifest.webmanifest"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL).catch(()=>null)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.hostname.includes("supabase.co")||u.hostname.includes("cdn.jsdelivr.net")||u.hostname.includes("cdnjs.cloudflare.com")){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,cp)).catch(()=>null);return r}).catch(()=>caches.match("./medaudit_face_sheet_ocr_doctor_wide_camera.html"))))});
