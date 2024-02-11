import logo from './logo.svg';
import './App.css';
import { BoxGeometry, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer }from 'three';

/* Idea Box

*/

function App() {
  // https://www.youtube.com/watch?v=DPl34H2ISsk
  // Create Canvas
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 5;

  const cube = new Mesh();

  const geometry = new BoxGeometry();

  const material = new MeshStandardMaterial();

  cube.geometry = geometry;
  cube.material = material;

  scene.add(cube);

  // Render
  const renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.getElementById('root');

  if (container) {
    container.appendChild(renderer.domElement);
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

App();

export default App;
