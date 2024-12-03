async function listarVideos() {
  const conexion = await fetch("https://8zk6kp-3001.csb.app/videos");
  const conexionConvertida = conexion.json();

  return conexionConvertida;
}

export const conexionApi = {
  listarVideos,
};
