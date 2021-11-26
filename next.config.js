module.exports = {
  webpack: (config, { isServer }) => {
    // 📝 This is so that 'r-integration' can be called from `getServerSideProps`
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.child_process = false
    }
    return config
  }
}
