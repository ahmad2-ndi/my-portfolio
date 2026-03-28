import { Component, ElementRef, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private points!: THREE.Points;
  private sphere!: THREE.Mesh;
  private animationFrameId!: number;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    
    // Cleanup Three.js resources
    this.points.geometry.dispose();
    (this.points.material as THREE.Material).dispose();
    this.sphere.geometry.dispose();
    (this.sphere.material as THREE.Material).dispose();
    this.renderer.dispose();
  }

  private initThree(): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Particles (Background)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: '#6366f1',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    this.points = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.points);

    // Glassmorphic Sphere (Main Element)
    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x6366f1,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.2,
      flatShading: false
    });

    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(this.sphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 2);
    pointLight.position.set(2, 3, 4);
    this.scene.add(pointLight);
    
    const purpleLight = new THREE.PointLight(0xec4899, 2);
    purpleLight.position.set(-2, -3, 4);
    this.scene.add(purpleLight);
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

    // Rotate particles
    this.points.rotation.y += 0.001;
    this.points.rotation.x += 0.0005;

    // Floating sphere animation
    const time = Date.now() * 0.001;
    this.sphere.position.y = Math.sin(time * 0.5) * 0.2;
    this.sphere.rotation.y += 0.002;
    this.sphere.rotation.z += 0.001;

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    const container = this.canvasContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }
}
