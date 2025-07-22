# 3D Models

Place your OBJ and MTL model files in the `/public/OBJ/` directory.

## Usage

1. Export your 3D model as OBJ with materials (MTL) from Blender, Maya, or any 3D software
2. Place both the OBJ and MTL files in the `/public/OBJ/` directory
3. The current setup looks for `/OBJ/star.obj` and `/OBJ/star.mtl`
4. Both files are automatically loaded together for proper material rendering

## Current Setup

The component will:
- Load your OBJ model from `/OBJ/star.obj` 
- Load materials from `/OBJ/star.mtl`
- Show a wireframe geometric smiley as fallback if either file is missing
- Apply mouse-based rotation
- Scale the model appropriately
- Convert all materials to black wireframe for the geometric theme

## File Format Support

- OBJ + MTL (currently implemented - geometry with materials)
- GLB (recommended for production - single file format)
- GLTF (with separate bin/texture files)

## Current Files

✅ `/OBJ/star.obj` - Found  
✅ `/OBJ/star.mtl` - Found

Your star model is ready to display!

Simply place your `star.obj` file in the `/public/OBJ/` directory!
